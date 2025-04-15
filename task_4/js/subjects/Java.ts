/// <reference path="./React.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (!teacher || !teacher.experienceTeachingJava) {
        return "No available teacher";
      }

      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
