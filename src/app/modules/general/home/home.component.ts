import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  textColor: string = 'blue';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.openDefaultTab();
  }

  openCity(evt: any, cityName: string) {
    const tabcontent = this.elementRef.nativeElement.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    const tablinks = this.elementRef.nativeElement.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }

    const cityElement = this.elementRef.nativeElement.querySelector(`#${cityName}`);
    if (cityElement) {
      this.renderer.setStyle(cityElement, 'display', 'block');
    }

    evt.currentTarget.classList.add("active");
  }

  openDefaultTab() {
    const defaultOpenElement = this.elementRef.nativeElement.querySelector("#defaultOpen");
    if (defaultOpenElement) {
      setTimeout(() => {
        defaultOpenElement.click();
      });
    }
  }

}







