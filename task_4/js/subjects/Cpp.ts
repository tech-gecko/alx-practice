/// <reference path="./Subject.ts" />

// Declaration merging: Adding an optional property
namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      const teacher = this.teacher;
      if (!teacher || !teacher.experienceTeachingC) {
        return "No available teacher";
      }

      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
