import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'date-time',
  standalone: true,
  templateUrl: './date-time.component.html',
})
export class DateTimeComponent implements OnInit, OnDestroy {
  public dateTime: string = '';

  private ngDestroy$ = new Subject<void>();

  /* This is just a simple example and will not change with system time.
     For that I would implement something like this: https://jmcfarlane.medium.com/displaying-time-in-angular-a464717fb9c2
  */
  public ngOnInit(): void {
    timer(0, 1000)
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe(
        () =>
          (this.dateTime = Intl.DateTimeFormat('cs-CZ', {
            dateStyle: 'medium',
            timeStyle: 'short',
          }).format(new Date())),
      );
  }

  public ngOnDestroy(): void {
    this.ngDestroy$.next();
    this.ngDestroy$.complete();
  }
}
