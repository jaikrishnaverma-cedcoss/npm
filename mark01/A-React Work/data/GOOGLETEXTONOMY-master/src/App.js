import data from './data.txt'
// import data from './data1.txt'
import './App.css';
import { useEffect, useState } from 'react';
import Optioner from './option';
function App() {
  let [lineSubArray, setLineSubArray] = useState([])

  const spliter = (text) => {
    let x = text.split('>')
    text = x.map(h => h.trim())
    return text
  }
  const Shorter = (arr, i = 0, data = [], cnt = 0) => {
    if (arr[i] == undefined)
      return ''
    data[arr[i]] = []
    Shorter(arr, i + 1, data[arr[i]])
    return data
  }
  useEffect(() => {
    fetch(data)
      .then(r => r.text())
      .then(text => {
        let newLine = text.split('\n')
        newLine.map((x, i) => newLine[i] = spliter(x))
        console.log("newLine", newLine)

        console.log(finalFunction(newLine))
        // newLine.map((x, i) => newLine[i] = Shorter(spliter(x)))
        console.log("newLine", newLine)

        // setLineSubArray([...newLine])


      })
  }, [])
  // key=Object.keys(arrays[0])[0]
  // const finalFunction=(arrays,key,operationalArray=[])=>{
  //   if(arrays.length==0&&arrays==undefined)
  //   return 0

  // arrays.map((x,i)=>{
  // x=Object.entries(x)
  // x.forEach(([key,val],i)=>{
  // if(operationalArray[key]==undefined){
  //   operationalArray[key]=[]
  // }else{

  // }
  // })
  // })

  // console.log("operationalArray",operationalArray)

  // } 
  const finalFunction = (arrays, i = 0, tmpArray = [], finalArr = []) => {

    if (i == arrays.length - 1){
      console.log(finalArr)
      return finalArr
    }
    if (tmpArray.length == 0) {
      tmpArray = [...arrays[i]]
      finalArr = Shorter(tmpArray)
    }
    else {
      arrays[i].forEach((x, iter) => {
        if (finalArr[x]==undefined) {
          if (iter == 0) {
            finalArr[x]=[]
            tmpArray = arrays[i]
          }
          else {
            
            tmpArray[iter] = x
            if (finalArr[arrays[i][iter]] == undefined) {
              finalArr[finalArr.length - 1].push([x])
            }
            else
              finalArr[finalArr.length - 1][iter] = [...finalArr[finalArr.length - 1][iter], x]
            // console.log("dsf",finalArr)
          }
        }
      })
    }
    finalFunction(arrays, i + 1, tmpArray, finalArr)


  }

  return (
    <div className="App" >
      {
        lineSubArray.map(x => <p> {JSON.stringify(x)}</p>)

      }
    </div>
  );
}
export default App;