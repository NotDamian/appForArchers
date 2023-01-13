import React from 'react'

export default function MoreDetail(props) {
    const { children } = props
    return (
        <div>
            <div className='d-flex flex-column justify-content-center flex-md-wrap flex-sm-row'>
                <div>
                    <p>Samopoczucie przed: {children.wellBeingBefore}, orasz po: {children.wellBeingAfter}</p>
                    <p>Pogoda: {children.weather}</p>
                </div>
                <table className='table table-bordered w-50 mr-5'>
                    <thead>
                        <tr className=''>
                            <th scope=''>strz.</th>
                            <th scope='col'>1</th>
                            <th scope='col'>2</th>
                            <th scope='col'>3</th>
                            <th scope='col'>Suma<br /> 3strz. </th>
                            <th scope='col'>pkt<br />Seria</th>
                            <th scope='col'>Suma</th>
                        </tr>
                    </thead >
                    <tbody>
                        <tr>
                            <th scope='row'>3</th>
                            <td>{children.wynik.first[6][0]}</td>
                            <td>{children.wynik.first[6][1]}</td>
                            <td>{children.wynik.first[6][2]}</td>
                            <td>{+children.wynik.first[6][0] + +children.wynik.first[6][1] + +children.wynik.first[6][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr className='border-bottom'>
                            <th scope='row'>6</th>
                            <td>{children.wynik.first[6][3]}</td>
                            <td>{children.wynik.first[6][4]}</td>
                            <td>{children.wynik.first[6][5]}</td>
                            <td>{+children.wynik.first[6][3] + +children.wynik.first[6][4] + +children.wynik.first[6][5]}</td>
                            <td>{+children.wynik.first[6][0] + +children.wynik.first[6][1] + +children.wynik.first[6][2] + +children.wynik.first[6][3] + +children.wynik.first[6][4] + +children.wynik.first[6][5]}</td>
                            <td>{children.wynik.all[0]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>9</th>
                            <td>{children.wynik.first[12][0]}</td>
                            <td>{children.wynik.first[12][1]}</td>
                            <td>{children.wynik.first[12][2]}</td>
                            <td>{+children.wynik.first[12][0] + +children.wynik.first[12][1] + +children.wynik.first[12][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>12</th>
                            <td>{children.wynik.first[12][3]}</td>
                            <td>{children.wynik.first[12][4]}</td>
                            <td>{children.wynik.first[12][5]}</td>
                            <td>{+children.wynik.first[12][3] + +children.wynik.first[12][4] + +children.wynik.first[12][5]}</td>
                            <td>{+children.wynik.first[12][0] + +children.wynik.first[12][1] + +children.wynik.first[12][2] + +children.wynik.first[12][3] + +children.wynik.first[12][4] + +children.wynik.first[12][5]}</td>
                            <td>{children.wynik.all[1]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>15</th>
                            <td>{children.wynik.first[18][0]}</td>
                            <td>{children.wynik.first[18][1]}</td>
                            <td>{children.wynik.first[18][2]}</td>
                            <td>{+children.wynik.first[18][0] + +children.wynik.first[18][1] + +children.wynik.first[18][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>18</th>
                            <td>{children.wynik.first[18][3]}</td>
                            <td>{children.wynik.first[18][4]}</td>
                            <td>{children.wynik.first[18][5]}</td>
                            <td>{+children.wynik.first[18][3] + +children.wynik.first[18][4] + +children.wynik.first[18][5]}</td>
                            <td>{+children.wynik.first[18][0] + +children.wynik.first[18][1] + +children.wynik.first[18][2] + +children.wynik.first[18][3] + +children.wynik.first[18][4] + +children.wynik.first[18][5]}</td>
                            <td>{children.wynik.all[2]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>21</th>
                            <td>{children.wynik.first[24][0]}</td>
                            <td>{children.wynik.first[24][1]}</td>
                            <td>{children.wynik.first[24][2]}</td>
                            <td>{+children.wynik.first[24][0] + +children.wynik.first[24][1] + +children.wynik.first[24][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>24</th>
                            <td>{children.wynik.first[24][3]}</td>
                            <td>{children.wynik.first[24][4]}</td>
                            <td>{children.wynik.first[24][5]}</td>
                            <td>{+children.wynik.first[24][3] + +children.wynik.first[24][4] + +children.wynik.first[24][5]}</td>
                            <td>{+children.wynik.first[24][0] + +children.wynik.first[24][1] + +children.wynik.first[24][2] + +children.wynik.first[24][3] + +children.wynik.first[24][4] + +children.wynik.first[24][5]}</td>
                            <td>{children.wynik.all[3]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>27</th>
                            <td>{children.wynik.first[30][0]}</td>
                            <td>{children.wynik.first[30][1]}</td>
                            <td>{children.wynik.first[30][2]}</td>
                            <td>{+children.wynik.first[30][0] + +children.wynik.first[30][1] + +children.wynik.first[30][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>30</th>
                            <td>{children.wynik.first[30][3]}</td>
                            <td>{children.wynik.first[30][4]}</td>
                            <td>{children.wynik.first[30][5]}</td>
                            <td>{+children.wynik.first[30][3] + +children.wynik.first[30][4] + +children.wynik.first[30][5]}</td>
                            <td>{+children.wynik.first[30][0] + +children.wynik.first[30][1] + +children.wynik.first[30][2] + +children.wynik.first[30][3] + +children.wynik.first[30][4] + +children.wynik.first[30][5]}</td>
                            <td>{children.wynik.all[4]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>33</th>
                            <td>{children.wynik.first[36][0]}</td>
                            <td>{children.wynik.first[36][1]}</td>
                            <td>{children.wynik.first[36][2]}</td>
                            <td>{+children.wynik.first[36][0] + +children.wynik.first[36][1] + +children.wynik.first[36][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>36</th>
                            <td>{children.wynik.first[36][3]}</td>
                            <td>{children.wynik.first[36][4]}</td>
                            <td>{children.wynik.first[36][5]}</td>
                            <td>{+children.wynik.first[36][3] + +children.wynik.first[36][4] + +children.wynik.first[36][5]}</td>
                            <td>{+children.wynik.first[36][0] + +children.wynik.first[36][1] + +children.wynik.first[36][2] + +children.wynik.first[36][3] + +children.wynik.first[36][4] + +children.wynik.first[36][5]}</td>
                            <td className='bg-primary'>{children.wynik.all[5]}</td>
                        </tr>

                    </tbody>
                </table >



                <table className='table table-bordered w-50'>
                    <thead >
                        <tr className=''>
                            <th scope=''>strz.</th>
                            <th scope='col'>1</th>
                            <th scope='col'>2</th>
                            <th scope='col'>3</th>
                            <th scope='col'>Suma<br /> 3strz. </th>
                            <th scope='col'>pkt<br />Seria</th>
                            <th scope='col'>Suma</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>3</th>
                            <td>{children.wynik.second[6][0]}</td>
                            <td>{children.wynik.second[6][1]}</td>
                            <td>{children.wynik.second[6][2]}</td>
                            <td>{+children.wynik.second[6][0] + +children.wynik.second[6][1] + +children.wynik.second[6][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr className='border-bottom'>
                            <th scope='row'>6</th>
                            <td>{children.wynik.second[6][3]}</td>
                            <td>{children.wynik.second[6][4]}</td>
                            <td>{children.wynik.second[6][5]}</td>
                            <td>{+children.wynik.second[6][3] + +children.wynik.second[6][4] + +children.wynik.second[6][5]}</td>
                            <td>{+children.wynik.second[6][0] + +children.wynik.second[6][1] + +children.wynik.second[6][2] + +children.wynik.second[6][3] + +children.wynik.second[6][4] + +children.wynik.second[6][5]}</td>
                            <td>{children.wynik.all[6]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>9</th>
                            <td>{children.wynik.second[12][0]}</td>
                            <td>{children.wynik.second[12][1]}</td>
                            <td>{children.wynik.second[12][2]}</td>
                            <td>{+children.wynik.second[12][0] + +children.wynik.second[12][1] + +children.wynik.second[12][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>12</th>
                            <td>{children.wynik.second[12][3]}</td>
                            <td>{children.wynik.second[12][4]}</td>
                            <td>{children.wynik.second[12][5]}</td>
                            <td>{+children.wynik.second[12][3] + +children.wynik.second[12][4] + +children.wynik.second[12][5]}</td>
                            <td>{+children.wynik.second[12][0] + +children.wynik.second[12][1] + +children.wynik.second[12][2] + +children.wynik.second[12][3] + +children.wynik.second[12][4] + +children.wynik.second[12][5]}</td>
                            <td>{children.wynik.all[7]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>15</th>
                            <td>{children.wynik.second[18][0]}</td>
                            <td>{children.wynik.second[18][1]}</td>
                            <td>{children.wynik.second[18][2]}</td>
                            <td>{+children.wynik.second[18][0] + +children.wynik.second[18][1] + +children.wynik.second[18][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>18</th>
                            <td>{children.wynik.second[18][3]}</td>
                            <td>{children.wynik.second[18][4]}</td>
                            <td>{children.wynik.second[18][5]}</td>
                            <td>{+children.wynik.second[18][3] + +children.wynik.second[18][4] + +children.wynik.second[18][5]}</td>
                            <td>{+children.wynik.second[18][0] + +children.wynik.second[18][1] + +children.wynik.second[18][2] + +children.wynik.second[18][3] + +children.wynik.second[18][4] + +children.wynik.second[18][5]}</td>
                            <td>{children.wynik.all[8]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>21</th>
                            <td>{children.wynik.second[24][0]}</td>
                            <td>{children.wynik.second[24][1]}</td>
                            <td>{children.wynik.second[24][2]}</td>
                            <td>{+children.wynik.second[24][0] + +children.wynik.second[24][1] + +children.wynik.second[24][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>24</th>
                            <td>{children.wynik.second[24][3]}</td>
                            <td>{children.wynik.second[24][4]}</td>
                            <td>{children.wynik.second[24][5]}</td>
                            <td>{+children.wynik.second[24][3] + +children.wynik.second[24][4] + +children.wynik.second[24][5]}</td>
                            <td>{+children.wynik.second[24][0] + +children.wynik.second[24][1] + +children.wynik.second[24][2] + +children.wynik.second[24][3] + +children.wynik.second[24][4] + +children.wynik.second[24][5]}</td>
                            <td>{children.wynik.all[9]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>27</th>
                            <td>{children.wynik.second[30][0]}</td>
                            <td>{children.wynik.second[30][1]}</td>
                            <td>{children.wynik.second[30][2]}</td>
                            <td>{+children.wynik.second[30][0] + +children.wynik.second[30][1] + +children.wynik.second[30][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>30</th>
                            <td>{children.wynik.second[30][3]}</td>
                            <td>{children.wynik.second[30][4]}</td>
                            <td>{children.wynik.second[30][5]}</td>
                            <td>{+children.wynik.second[30][3] + +children.wynik.second[30][4] + +children.wynik.second[30][5]}</td>
                            <td>{+children.wynik.second[30][0] + +children.wynik.second[30][1] + +children.wynik.second[30][2] + +children.wynik.second[30][3] + +children.wynik.second[30][4] + +children.wynik.second[30][5]}</td>
                            <td>{children.wynik.all[10]}</td>
                        </tr>
                        <tr>
                            <th scope='row'>33</th>
                            <td>{children.wynik.second[36][0]}</td>
                            <td>{children.wynik.second[36][1]}</td>
                            <td>{children.wynik.second[36][2]}</td>
                            <td>{+children.wynik.second[36][0] + +children.wynik.second[36][1] + +children.wynik.second[36][2]}</td>
                            <td className='table-secondary'></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>36</th>
                            <td>{children.wynik.second[36][3]}</td>
                            <td>{children.wynik.second[36][4]}</td>
                            <td>{children.wynik.second[36][5]}</td>
                            <td>{+children.wynik.second[36][3] + +children.wynik.second[36][4] + +children.wynik.second[36][5]}</td>
                            <td>{+children.wynik.second[36][0] + +children.wynik.second[36][1] + +children.wynik.second[36][2] + +children.wynik.second[36][3] + +children.wynik.second[36][4] + +children.wynik.second[36][5]}</td>
                            <td className='bg-primary'>{children.wynik.all[11]}</td>
                        </tr>

                    </tbody>
                </table>
            </div >
        </div>
    )
}
