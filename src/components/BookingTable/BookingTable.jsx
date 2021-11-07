import React, { useState } from 'react'
import { useEffect } from 'react'
import { BookingTableWrapper, ComboCard, HotCombo, ParallaxImg, TableForm } from './bt.elm'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingTable = ({ combos }) => {

    const [y, setY] = useState(0)
    const [initialY, setInitialY] = useState(0)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const renderOption = () => {
        var range = []
        var result = null
        for (var i = 1; i < 30; i++) {
            range.push(i)
        }
        result = range.map((opt, index) => <option value={opt} key="opt">{index} peoples</option>)
        return result
    }
    const renderCard = (combo) => {
        if (combo) {
            return combo.map((item, index) => {
                return <ComboCard key={index}>
                    <div className='img-box'>
                        <img src={item.image} alt="" /></div>
                    <div className='caption'>
                        <h2>{item.name}</h2>
                        <hr />
                    </div>
                    <div className='desc'><span>{item.desc}</span></div>
                </ComboCard>
            })
        }
    }
    useEffect(() => {
        function getOffset(el) {
            var _x = 0;
            var _y = 0;
            while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
                _x += el.offsetLeft - el.scrollLeft;
                _y += el.offsetTop - el.scrollTop;
                el = el.offsetParent;
            }
            return { top: _y, left: _x };
        }

        const parallaxEffect = () => {
            setY(window.pageYOffset)
            setInitialY(getOffset(document.getElementById('booking-table-position')).top)
        }
        window.addEventListener('scroll', parallaxEffect)
        return () => {
            window.removeEventListener('scroll', parallaxEffect)
        }
    }, [y])
    return (
        <BookingTableWrapper id='booking-table-position'>
            <ParallaxImg y={y} initialY={initialY}></ParallaxImg>
            <HotCombo>
                {renderCard(combos)}
            </HotCombo>
            <TableForm>
                <div className='title-base'>
                    <div className='text'>
                        <p>Classic contact form reservation</p>
                        <h2>RESERVE A TABLE</h2>
                    </div>
                    <div className='desc'>
                        Tincidunt integer eu augue augue nunc elit dolor luctus placerat scelerisque euismod iaculis eu lacus nunc mi elitvehicula ut laoreet acaliquam sit amet justo nunc tempor metus velo. Tincidunt integer eu augue augue nunce.
                    </div>
                    <div className='footer'>
                        <div className='footer-item'>
                            <i className="fas fa-ticket-alt"></i>
                            <span>All night open</span>
                        </div>
                        <div className='footer-item'>
                            <i className="fas fa-beer"></i>
                            <span>Belgium beer</span>
                        </div>
                        <div className='footer-item'>
                            <i className="fas fa-car"></i>
                            <span>Free parking 24/7</span>
                        </div>
                    </div>
                </div>
                <div className='form-booking'>
                    <div className='form-item'>
                        <label>Reservation date</label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)} //only when value has changed
                        />
                    </div>
                    <div className='form-item'>
                        <label>Reservation time</label>
                        <input type="text" id='time' className='form-input' />
                    </div>
                    <div className='form-item'>
                        <label>People</label>
                        <select className='form-select' id='people'>
                            {renderOption()}
                        </select>
                    </div>
                    <div className='form-item'>
                        <label>Email Or Phone</label>
                        <input type="text" id='contact' className='form-input' />
                    </div>
                </div>
            </TableForm>
        </BookingTableWrapper>
    )
}

export default BookingTable
