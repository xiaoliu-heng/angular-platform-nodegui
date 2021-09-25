import {QWidget, NodeWidget, QLabel} from '@nodegui/nodegui'

export type ElementFactory = (...args: any) => NodeWidget<any>;

const elementAdapter = (widgetConstructor: new()=>NodeWidget<any>) => (options:Record<'parent'|string, any> = {}) =>{
  const widget = new widgetConstructor()
  for (const [key,val] of Object.entries(options)){
    // @ts-ignore
    widget[`set${key}`]?.(val)
  }
  return widget;
}

export const elementsFactory: Map<string, ElementFactory> = new Map()
  .set('widget', elementAdapter(QWidget))
  .set('label', elementAdapter(QLabel))
