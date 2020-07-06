import { Component } from "@angular/core";

@Component({
  selector: "pm-root",
  template: `
    <div>
      <h1>
        {{ pageTitle }}
        <h1>
          <div>My First Component</div>
          <div></div>
        </h1>
      </h1>
    </div>
  `,
})
export class AppComponent {
  pageTitle: string = "Acme Product Management";
}
