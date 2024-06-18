import { Component, OnDestroy, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Machine, MachineStatus, machineStates } from '../store/machine.state';
import { Observable, Subject, take, takeUntil, withLatestFrom } from 'rxjs';
import { LineMachineFacade } from '../store/machine.facade';
import { splitCamelCaseString } from '../utils/string';
import { CommonModule } from '@angular/common';
import { LetDirective } from '@ngrx/component';

type StatusToggleForm = {
  machine: FormControl<string>;
  status: FormControl<MachineStatus>;
};

@Component({
  selector: 'status-toggle-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LetDirective],
  templateUrl: './status-toggle-form.component.html',
})
export class StatusToggleFormComponent implements OnDestroy {
  public splitCamelCaseString = splitCamelCaseString;
  public machineStates = machineStates;

  public statusToggleForm: FormGroup<StatusToggleForm> =
    this.fb.group<StatusToggleForm>({
      machine: this.fb.control('', Validators.required),
      status: this.fb.control(machineStates[0], Validators.required),
    });

  private readonly facade = inject(LineMachineFacade);
  private ngDestroy$ = new Subject<void>();

  protected lineMachine$: Observable<Machine[]>;

  constructor(private fb: NonNullableFormBuilder) {
    this.lineMachine$ = this.facade.lineMachine$;

    /* Initialise the form with the first machine in the line */
    this.lineMachine$.pipe(take(1)).subscribe((lineMachine) => {
      this.statusToggleForm.setValue({
        machine: lineMachine[0].name,
        status: lineMachine[0].status,
      });
    });

    /* When a user selects a machine, we update the status field to match the selected machine state */
    this.statusToggleForm.controls.machine.valueChanges
      .pipe(withLatestFrom(this.lineMachine$), takeUntil(this.ngDestroy$))
      .subscribe(([machineName, lineMachine]) => {
        const selectedMachine = lineMachine.find(
          (machine) => machine.name === machineName,
        );
        if (selectedMachine) {
          this.statusToggleForm.controls.status.setValue(
            selectedMachine.status,
          );
          this.statusToggleForm.markAsUntouched();
        }
      });
  }

  public setStatus(): void {
    this.facade.setMachineStatus(
      this.statusToggleForm.value.machine ?? '',
      this.statusToggleForm.value.status ?? 'running',
    );
  }

  public ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
