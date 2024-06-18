import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LineMachineFacade } from './store/machine.facade';
import { Observable, of } from 'rxjs';
import { Machine } from './store/machine.state';

const mockLineMachine: Machine[] = [
  { name: 'testMachineOne', icon: 'test_icon', status: 'running' },
  { name: 'testMachineTwo', icon: 'test_icon', status: 'warning' },
];

describe('AppComponent', () => {
  const facadeMock: Partial<LineMachineFacade> = {
    get lineMachine$(): Observable<Machine[]> {
      return of(mockLineMachine);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: LineMachineFacade, useValue: facadeMock }
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display the line machines with nicely formatted names', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const machineNames = document.querySelectorAll('[data-test=machine-name]');

    expect(machineNames.length).toBe(4);
    expect(machineNames[0]?.innerHTML.trim()).toBe('Test Machine One');
    expect(machineNames[1]?.innerHTML.trim()).toBe('Test Machine Two');
    expect(machineNames[2]?.innerHTML.trim()).toBe('Test Machine One');
    expect(machineNames[3]?.innerHTML.trim()).toBe('Test Machine Two');
  });
});
