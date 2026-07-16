import { Component } from '@angular/core';
import { LucideCodeXml, LucideDatabase, LucideDynamicIcon, LucidePanelsTopLeft } from '@lucide/angular';

@Component({
  selector: 'about',
  imports: [LucideDynamicIcon],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  techCategories= [
    {
      title: "Frontend",
      icon: LucidePanelsTopLeft,
      skills: ["Angular", "TypeScript", "JavaScript", "React", "HTML", "CSS", "SCSS"]
    },
    {
      title: "Tools & Libraries",
      icon: LucideCodeXml,
      skills: ["Bootstrap", "Git & GitHub", "RxJS", "REST APIs"]
    },
    {
      title: "Specializations",
      icon: LucideDatabase,
      skills: ["Web Performance", "Responsive Design", "Accessibility", "UI/UX"]
    },
  ]

  experience = [
    {
      timePeriod: "2023 - Present",
      jobTitle: "Associate Software Engineer",
      companyName: "Keka HR and Payroll",
      description: "Built responsive web applications using Angular and React"
    }
  ]
}
