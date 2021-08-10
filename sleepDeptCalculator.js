let getSleepHours = (day) => {
    if(day==="Monday"){
      return  8
    }
    else if (day === "Tuesday"){
      return 5
    }
    else if(day === "Wednesday"){
      return 7
    }
    else if(day === "Thursday"){
      return 11
    }
    else if(day === "Friday"){
      return 9
    }
    else if(day === "Saturday"){
      return 4
    }
    else{
      return 10
    }
  }
  
  let getActualSleepHours = () => {
    return getSleepHours("Friday")
  }
  
  let getIdealSleepHours = () =>{
    let idealHours = 8
    return idealHours * 7
  }
  
  let calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
  
    if(actualSleepHours === idealSleepHours){
      console.log("User got the perfect amount of sleep")
    }
    else if(actualSleepHours > idealSleepHours){
      console.log("User got more sleep than needed")
    }
    else{
      console.log("User should get some rest")
    }
  }
  calculateSleepDebt()
  