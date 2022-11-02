import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setText, setReport } from '../../../store/input'
import { sendText } from "../../../api/textApi"

import "./inputText.scss"

const InputText = () => {
    const dispatch = useDispatch()
    const { text } = useSelector((state: any) => state.persistedReducer)
    const { report } = useSelector((state: any) => state.persistedReducer)
    const [loading, setLoading] = useState<boolean>(false)
    const [reportFetched, setReportFetched] = useState<boolean>(false)

    useEffect(() => {
        setReportFetched(false)
        dispatch(setReport({}))
    }, [])
    function inputChangeHandle(event: any): void {
        dispatch(setText(event.target.value))
    }
    async function submitHandler() {
        setLoading(true)
        var data = await sendText(text)
        dispatch(setReport(data))
        setReportFetched(true)
        setLoading(false)
        console.log(data)
    }
    var loader = <div className="loader">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span></div>

    return (<>
        <div className="inputAnimate">
            <textarea rows={5} placeholder="Enter text" value={text} onChange={inputChangeHandle} ></textarea>
        </div>
        {!loading && <button type='button' className="submitButton" onClick={submitHandler}>Submit</button>}
        {loading && <button type='button' className="submitButton" >{loader}</button>}
        {reportFetched && <div className="Report">
            <h2>percent plagiarism : {report.percentPlagiarism
            }</h2>
        </div>}

    </>
    )
}

export default InputText