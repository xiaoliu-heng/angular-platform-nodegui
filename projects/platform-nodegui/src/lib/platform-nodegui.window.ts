import { Injectable } from '@angular/core';
import {QMainWindow, NodeWidget, QBoxLayout} from '@nodegui/nodegui';

import { ElementFactory, elementsFactory } from './elements-registry';


@Injectable()
export class MainWindow {
  private readonly qMainWindow: QMainWindow;

  constructor() {
    this.qMainWindow = new QMainWindow();
    this.qMainWindow.setLayout(new QBoxLayout(0));
  }

  createElement(name: string, options: any = {}): NodeWidget<any>{
    let elementFactory: ElementFactory|undefined = elementsFactory.get(name);

    if (!elementFactory) {
      elementFactory = elementsFactory.get('widget');
    }

    return elementFactory!({ ...options });
  }

  selectRootElement(): QMainWindow {
    return this.qMainWindow;
  }

}
