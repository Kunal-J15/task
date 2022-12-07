class Student{

    static count=0;
    constructor(name,age,phone,marks){
      this.name=name;
      this.age=age;
      this.phone = phone;
      this.marks = marks;
      this.incrCount();
    }
  
    isEligible(){
      if(this.marks>40) return "eligible";
      else return "not eligible";
    }
  
    incrCount(){
      Student.count+=1;
    }

    eligibleForPlacements(minMarks){
      return (minAge)=>{
        if(this.age>=minAge && this.marks>=minMarks) return true;
        return false;
      }
    }
  }
let s1 = new Student("joe",18,123,65);

let s2 = new Student("kia",20,123,30);

let s3 = new Student("moe",22,123,70);

let s4 = new Student("yu",15,123,50);

let s5 = new Student("john",17,123,20);
let students = [];
students.push(s1,s2,s3,s4,s5);
for (const std of students) {
  if(std.eligibleForPlacements(60)(18)) console.log(std.name)
}
