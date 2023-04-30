import React from 'react'

const EditAppointment = () => {
  return (
    <div className='bg-light'>
    <div className='container min-vh-100'>
        <div className='min-vh-100 d-flex justify-content-center align-items-center'>
            <form className='p-5 col-12 col-md-8 col-lg-6 row border bg-white position-relative rounded' >
                <p style={{ background: "-webkit-linear-gradient(left, #0072ff, #8811c5)", height: "5rem" }} className='text-white text-center position-absolute top-0 start-0 fs-3 d-flex justify-content-center align-items-center'>Perditeso Terminin</p>
                <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                    <label htmlFor="inputDoc" className="form-label text-start">Doktorri</label>
                    <select id='inputDoc' className="form-select"></select>
                </div>
                <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                    <label htmlFor="inputPatient" className="form-label text-start">Pacienti</label>
                    <select id='inputPatient' className="form-select"></select>
                </div>
                <div className="col-12 d-flex flex-column justify-content-start mt-3">
                    <textarea id='inputDecription' rows={5} placeholder="Pershkrimi..."></textarea>
                </div>
                <div className=' pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                    <label htmlFor="inputDate" className="form-label text-start">Data</label>
                    <input id='inputDate' type="date" className="form-control"/>
                </div>
                <div className='pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                    <label htmlFor="inputTime" className="form-label text-start">Koha</label>
                    <input id='inputTime' type="time" className="form-control" />
                </div>
                <div className="col-12 d-flex mt-4 ">
                    <button type="submit" className="btn btn-primary">Perditeso</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default EditAppointment