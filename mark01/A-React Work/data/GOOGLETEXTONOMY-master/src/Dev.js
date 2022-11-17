import data from './data.txt'
// import data from './data1.txt'
import './App.css';
import { useEffect, useState } from 'react';
function Dev() {
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
                // console.log("newLine", newLine)

                // setLineSubArray([...newLine])


            })
    }, [])
    const finalFunction = (arrays, arraysIteration = 0, loopIteration = 0, tmpArray = [], finalArr = []) => {

        if (arraysIteration == (arrays.length - 1)) {
            return finalArr
        }
        if (arraysIteration == 0) {
            finalArr = Shorter(arrays[arraysIteration]); arraysIteration++
        }

        else {
            // console.log(arraysIteration,loopIteration)
         if (finalArr[arrays[arraysIteration]] == undefined ) {
                if( loopIteration==0)
                finalArr[arrays[arraysIteration][0]]=[]
                else{
                 
                //  finalArr[arrays[arraysIteration][loopIteration]]= iter(arrays[arraysIteration],1,finalArr[arrays[arraysIteration][0]])
               console.log(iter(arrays[arraysIteration],1,finalArr[arrays[arraysIteration][0]]))
                }
               
            }
            
        }
        if (arrays[arraysIteration].length == loopIteration) {
            loopIteration = 0
            arraysIteration++
        }

        return finalFunction(arrays, arraysIteration, loopIteration+1, tmpArray, finalArr)


    }
    function iter(arri,arrIndex,farr){
        if(arrIndex==arri.length-1)
            return []
            farr[arri[arrIndex]]=[]
            farr[arri[arrIndex]]=iter(arri,arrIndex++, farr[arri[arrIndex]])
         return farr[arri[arrIndex]]
       }

    return (
        <div className="App" >
            {
                lineSubArray.map(x => <p> {JSON.stringify(x)}</p>)

            }
        </div>
    );
}
export default Dev;