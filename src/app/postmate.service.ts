import { Injectable } from '@angular/core';
import Postmate from "postmate";

@Injectable({
  providedIn: 'root'
})
export class PostmateService {
  private handshake: Postmate.Model;

  constructor() {
    this.handshake = new Postmate.Model({});
  }
  emitCode(html:string, js:string, elementStore:any) {
    if (!this.handshake) return;
    this.handshake?.then(async (parent: any) => {
      console.info("Emitting code to parent", parent);
      parent?.emit("code", {
        html: html,
        js: js,
        elementStore: elementStore,
      });
    });
  }
}
