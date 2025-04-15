/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
var Subjects;
(function (Subjects) {
    Subjects.cpp = new Subjects.Cpp();
    Subjects.java = new Subjects.Java();
    Subjects.react = new Subjects.React();
    Subjects.cTeacher = {
        firstName: "Daniel",
        lastName: "James",
        experienceTeachingC: 10
    };
    console.log("C++");
    Subjects.cpp.teacher = Subjects.cTeacher;
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());
    console.log("Java");
    Subjects.java.teacher = Subjects.cTeacher;
    console.log(Subjects.java.getRequirements());
    console.log(Subjects.java.getAvailableTeacher());
    console.log("React");
    Subjects.react.teacher = Subjects.cTeacher;
    console.log(Subjects.react.getRequirements());
    console.log(Subjects.react.getAvailableTeacher());
})(Subjects || (Subjects = {}));
//# sourceMappingURL=main.js.map