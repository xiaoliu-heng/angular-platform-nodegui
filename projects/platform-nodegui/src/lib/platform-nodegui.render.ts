import {Renderer2, RendererFactory2, RendererStyleFlags2, RendererType2} from "@angular/core";
import {MainWindow} from "./platform-nodegui.window";

export class NodeGuiRendererFactory implements RendererFactory2 {
  private renderer:Renderer2
  begin(): void {
  }

  constructor(private mainWindow:MainWindow) {
    this.renderer = new PlatformNodeGuiRender(mainWindow)
  }

  createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
    return this.renderer;
  }

  end(): void {
    this.renderer.selectRootElement('root').show()
  }

  whenRenderingDone(): Promise<any> {
    return Promise.resolve(undefined);
  }

}

export class PlatformNodeGuiRender implements Renderer2{
  readonly data = {}
  destroyNode = null;

  constructor(private _window: MainWindow){}

  addClass(el: any, name: string): void {
  }

  appendChild(parent: any, newChild: any): void {
    parent.layout.addWidget(newChild)
  }

  createComment(value: string): any {
  }

  createElement(name: string, namespace?: string | null): any {
    return this._window.createElement(name)
  }

  createText(value: string): any {
    return this._window.createElement('label', {text: value})
  }

  destroy(): void {
  }

  insertBefore(parent: any, newChild: any, refChild: any, isMove?: boolean): void {
  }

  listen(target: any, eventName: string, callback: (event: any) => (boolean | void)): () => void {
    return function () {
    };
  }

  nextSibling(node: any): any {
  }

  parentNode(node: any): any {
    return node.parent();
  }

  removeAttribute(el: any, name: string, namespace?: string | null): void {
  }

  removeChild(parent: any, oldChild: any, isHostElement?: boolean): void {
  }

  removeClass(el: any, name: string): void {
  }

  removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {
  }

  selectRootElement(selectorOrNode: any, preserveContent?: boolean): any {
    return this._window.selectRootElement()
  }

  setAttribute(el: any, name: string, value: string, namespace?: string | null): void {
  }

  setProperty(el: any, name: string, value: any): void {
  }

  setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2): void {
  }

  setValue(node: any, value: string): void {
  }
}
