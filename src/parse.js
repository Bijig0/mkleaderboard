import {useEffect, useState} from 'react'

const useParse = (label) => {
  const [correctPosition,setCorrectPosition] = useState("")
  const [value,setValue] = useState(0)

  const labelValue = () => {
    switch (correctPosition) {
      case 1:
        setValue(value + 350)
        break;
      case 2:
        setValue(value + 260)
        break;
      case 3:
        setValue(value + 230)
        break;
      case 4:
        setValue(value + 200)
        break;
      case 5:
        setValue(value + 140)
        break;
      case 7:
        setValue(value + 70)
        break;
      case 9:
        setValue(value + 40)
        break;
      case 13:
        setValue(value + 20)
        break;
      case 17:
        setValue(value + 10)
        break;
      case 25:
        setValue(value + 5)
        break;
    }
  }
  const removeLabel = () => {
    if (label.charAt(1) == '.' || label.charAt(1) == '-') {
      setCorrectPosition(parseInt(label.charAt(0)))
    }
    else if (label.charAt(2) == '.' || label.charAt(2) == '-') {
      setCorrectPosition(parseInt(label.substring(0,2)))
    }
    else {
      setCorrectPosition(parseInt(label.substring(0,3)))
    }
  }

  useEffect(() => {
    removeLabel()
  }, [])

    useEffect(() => {
      labelValue()
    }, [correctPosition])

    return [correctPosition,value]
}

export default useParse
