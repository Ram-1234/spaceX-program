import React from 'react';
import './filter.css';



export default function Filter(props) {


    return (
        <>
        {/* <Apps value={data}/> */}
        <div className="filter-app">
            <div className="filter-logo" >
            <h4>Filters</h4>
            </div>

            <div className="launch-year">
            {/* <d>Launch Year</d> */}
            <input type="text"    placeholder="Launch Year" onChange={e=>props.event3(e)} />
            <hr/>
            </div>
                      
                <div onClick={e=>props.event(e)} className="filter-year">
                    <div className="button-info">
                    < button>2006</ button>
                    < button>2007</ button>
                    </div>
                    <div className="button-info">
                    < button>2009</ button>
                    < button>2010</ button>
                    </div>
                    <div className="button-info">
                    < button>2011</ button>
                    < button>2012</ button>
                    </div>
                    <div className="button-info">
                    < button>2013</ button>
                    < button>2014</ button>
                    </div>
                    <div className="button-info">
                    < button>2015</ button>
                    < button>2016</ button>
                    </div>
                    <div className="button-info">
                    < button>2017</ button>
                    < button>2018</ button>
                    </div>
                    <div className="button-info">
                    < button>2019</ button>
                    < button>2020</ button>
                    </div>
                </div>
            <div className="successfull-launch" onClick={e=>props.event1(e)}>
            <p>Successful Launch</p>
            <hr/>
            <button>True</button>
            <button>False</button>
            </div>

            <div className="successfull-land" onClick={e=>props.event2(e)}>
            <p>Successful Landing</p>
            <hr/>
            <button>True</button>
            <button>False</button>
            </div>
        </div>
        </>
    )
}
