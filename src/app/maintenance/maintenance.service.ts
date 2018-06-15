import { Maintenace } from './maintenace.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MaintenanceService {

  private maintenanceList: Maintenace[] = [
    { id: 'pool', category: 'Pool', firstname: 'aaaa', lastname: 'aaaaa', email: 'aaa@aa.aa', mobile: '1111111111' },
    { id: 'garden', category: 'Garden', firstname: 'bbbb', lastname: 'bbbbb', email: 'bbb@bb.bb', mobile: '2222222222' },
    { id: 'electrician', category: 'ELectrician', firstname: 'cccc', lastname: 'ccccc', email: 'ccc@cc.cc', mobile: '3333333333' }
  ];
  constructor() { }

  getMaintenanceList() {
    return this.maintenanceList.slice();
  }
}
