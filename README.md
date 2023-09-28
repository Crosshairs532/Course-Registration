# Course Registration

Project Features


1. One course can be added only one time, otherwise it will show an error. 
2. Credit hours cannot exceed 20 credit hours. if it does it will show an alert message.
3. one can track the remaining credit hours.

STATE
i have used 5 useState.
{const [alldata, setAlldata] = useState([]) }:  is used for storing fetched data which comes in an array. all data is a variables that holds the data those comes in array and setalldata is used for passing the fetched data on that variable.

{ const [selected, setSelected] = useState([])}: is for selected data in array . after clicking a select  button  the objects that need to be stored is passed in an array and then using setselected each time we are updating the state and storing into a variable called selected.

{const [credit, setCredit] = useState(0)
,const [remaining, setRemaining] = useState(20),
const [total, setTotal] = useState(0) }:  after clicking we want to tract how many credit has been takes. so using these state we updating the credit hour state,  but we have set a max credit that one can take . So each time we are adding credits that can reach up to 20 also there is a state used for remaining credit hour. lastly we have a state for total course price ; that changes after clicking select button. 

