import {Employee, Manager} from "./model"

export default function demo() {
    let emp = new Employee("Dave", "HR");
    let mgr = new Manager("Jane", "IT", 250000.0);

    console.log(emp.toString());
    console.log(mgr.toString());
}
