import { Component, OnInit } from '@angular/core';
import {ChannelService} from '../services/channelService';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  constructor(public channelService: ChannelService) {
    channelService.getChannels();
  }

  ngOnInit() {
  }

  delete(channel_id) {
    this.channelService.delete(channel_id).subscribe(res => {
      this.channelService.channels = this.channelService.channels.filter(ch => ch.id !== channel_id);
    }
  );
  }
}
