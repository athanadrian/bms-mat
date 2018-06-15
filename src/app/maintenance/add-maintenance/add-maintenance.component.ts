import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from './../maintenance.service';

import { Maintenace } from '../maintenace.model';

@Component({
  selector: 'app-add-maintenance',
  templateUrl: './add-maintenance.component.html',
  styleUrls: ['./add-maintenance.component.css']
})
export class AddMaintenanceComponent implements OnInit {
  maintenanceList: Maintenace[] = [];
  constructor(private maintenanceService: MaintenanceService) { }

  ngOnInit() {
    this.maintenanceList = this.maintenanceService.getMaintenanceList();
  }

}
