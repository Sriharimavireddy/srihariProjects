import { LightningElement } from 'lwc';

export default class BmiCalculatorr extends LightningElement {
    height=''
    weight=''
    bmiValue=''
    result=''

    inputHandler(event){
        const {name, value}=event.target
        if(name=="height"){
            this.height = value
        }
        if(name=="weight"){
            this.weight =value
        }
    }

    submitHandler(event){

        event.preventDefault()
        console.log("Height",this.height)
        console.log("Weight",this.weight)
        this.calculate()
    }

    //BMI = weight in kgs / height in meters
    calculate(){
        let height = Number(this.height/100);
         let BMI = Number(this.weight)/(height * height); 
         console.log("bmi value", BMI)

         this.bmiValue= Number(BMI.toFixed(2))

    if(this.bmiValue<=18.5)
    {
        this.result = "UnderWeight"
    }
    else if(this.bmiValue >=18.5 && this.bmiValue <=24.9)
    {
        this.result ="Healthy"
    } 
    else if(this.bmiValue>=25.0 && this.bmiValue <=29.9)
    {
        this.result ="Overweight"
    }
    else{
        this.result = "Obese"
    }
    console.log("Bmi value is: ", this.bmiValue)
    console.log("Result is : ", this.result)
}
recalculateHandler(){
    this.height=''
    this.weight=''
    this.bmiValue=''
    this.result=''

}
}