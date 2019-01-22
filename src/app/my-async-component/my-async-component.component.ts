import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MyAsyncService } from 'src/app/my-async-component/my-async.service';

@Component({
  selector: 'app-my-async-component',
  templateUrl: './my-async-component.component.html',
  styleUrls: ['./my-async-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyAsyncComponentComponent implements OnInit {

  childTitle: string = `I'm not populated yet...`;
  constructor(private asyncService: MyAsyncService) { }

  async ngOnInit() {
    console.log('before the call');
    // This will cause the runtime to jump out and continue doing other things
    // In this particular case, it will complete rendering of the child-component
    await this.asyncService.resolveImmediately();
    console.log('after the call');

    // After the async call is done, this line will fire, but the child component will not update, since it happens after
    // its ngOnInit is completed, and all inputs are bound.
    this.childTitle = `We're all done`;
  }

}
