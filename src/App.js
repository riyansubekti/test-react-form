import React, { useState, useRef } from 'react'
import './App.css'

const useFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

  return [ htmlElRef,  setFocus ] 
}

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [bDate, setBDate] = useState('');
  const [gender, setGender] = useState('');
  const [passport, setPassport] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIDNumber] = useState('');
  const [social, setSocial] = useState('');
  const [status, setStatus] = useState('');
  const [occupation, setOccupation] = useState('');
  const [retiree, setRetiree] = useState('');
  const [inputName2, setInputName2] = useFocus();

  const handleSubmit = e => {
    e.preventDefault();
    if (
      name1 === '' ||
      bDate === '' ||
      gender === '' ||
      passport === '' ||
      address === '' ||
      phone === '' ||
      email === '' ||
      idNumber === '' ||
      social === '' ||
      status === '' ||
      occupation === '' ||
      retiree === '' 
    ) {
      alert('all fields must be required!');
    }else{
      alert(`
        Proposed Insurred's Name: ${name1+name2}
        Birth Date: ${bDate}
        Gender: ${gender}
        Passport no: ${passport}
        Address: ${address}
        Phone Number: ${phone}
        Email Address: ${email}
        ID Number: ${idNumber}
        Social Security Number: ${social}
        Status: ${status}
        Occupation: ${occupation}
        Are you retiree: ${retiree}
      `)
    }
  }

  return (
    <div className="paper">
      <div className="container">

        <label className="title">General Questions</label>

        <form onSubmit={handleSubmit}>
          <div className="flex mt16">
            <div className="flex flex-d-col" style={{ flexGrow: 1, alignItems: 'flex-start' }}>
              <label className="mr16">Proposed Insurred's Name:</label>
              <label className="mr16 text-small">{`(Please use capital letters)`}</label>
            </div>
      
            <div className="flex flex-d-col" style={{ flexGrow: 5, alignItems: 'flex-end' }}>
              <input value={name1} onChange={e => {
                const val = e.target.value;
                setName1(val);
                if (val.length===27) setInputName2();
              }}
                maxLength="27" className="letter-square" type="text" autoFocus />
              <input ref={inputName2} value={name2} onChange={e => setName2(e.target.value)}
                maxLength="27" className="letter-square mt8" type="text" />
            </div>
          </div>

          <div className="flex mt16">
            <div className="flex group mr16">
              <label className="mr16">Birth Date:</label>
              <input type="date" placeholder='' onChange={e => setBDate(e.target.value)} />
            </div>
            <div className="flex group mr16">
              <label className="mr16">Gender:</label>
              <input type="radio" name="gender" value="Male" checked={gender === 'Male'}
                onChange={e => setGender(e.target.value)}/>
              <label className="mr8">Male</label>
              <input type="radio" name="gender" value="Female" checked={gender === 'Female'}
                onChange={e => setGender(e.target.value)}/>
              <label>Female</label>
            </div>
            <div className="flex group">
              <label className="mr16">Passport no:</label>
              <input type="text" onChange={e => setPassport(e.target.value)} />
            </div>
          </div>

          <div className="flex mt16">
            <div className="flex group">
              <label className="mr16">Address:</label>
              <input type="text" onChange={e => setAddress(e.target.value)} />
            </div>
          </div>

          <div className="flex mt16">
            <div className="flex group mr16">
              <label className="mr16">Phone Number:</label>
              <input type="text" onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="flex group">
              <label className="mr16">Email Address:</label>
              <input type="email" onChange={e => setEmail(e.target.value)} />
            </div>
          </div>

          <div className="flex mt16">
            <label className="mr16">ID Number:</label>
            <input type="text" className="mr16" onChange={e => setIDNumber(e.target.value)} />
            <label className="mr16">Social Security Number:</label>
            <input type="text" onChange={e => setSocial(e.target.value)} />
          </div>

          <div className="flex mt16">
            <label className="mr16">Status:</label>
            <input type="radio" name="status" value="Single" checked={status === 'Single'}
              onChange={e => setStatus(e.target.value)}/>
            <label className="mr16">Single</label>
            <input type="radio" name="status" value="Married" checked={status === 'Married'}
              onChange={e => setStatus(e.target.value)}/>
            <label className="mr16">Married</label>
            <input type="radio" name="status" value="Devorced" checked={status === 'Devorced'}
              onChange={e => setStatus(e.target.value)}/>
            <label className="mr16">Devorced</label>
            <input type="radio" name="status" value="Others" checked={status === 'Others'}
              onChange={e => setStatus(e.target.value)}/>
            <label className="mr16">Others</label>
          </div>

          <div className="flex mt16">
            <div className="flex group mr16">
              <label className="mr16">Occupation:</label>
              <input type="text" onChange={e => setOccupation(e.target.value)} />
            </div>
            <div className="flex group">
              <label className="mr16">Are you retiree:</label>
              <input type="radio" name="retiree" value="Yes" checked={retiree === 'Yes'}
                onChange={e => setRetiree(e.target.value)}/>
              <label>Yes</label>
              <input type="radio" name="retiree" value="No" checked={retiree === 'No'}
                onChange={e => setRetiree(e.target.value)}/>
              <label>No</label>
            </div>
          </div>

          <div className="btn-group">
            <button className="btn" type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
   </div>
  )
}

export default App