

import { Notes } from './Notes';


const Home = () => {

    return (
        <div >
            <div className="container my-3 " >
                <h1>Add a note</h1>
                <form>
                    <div className="mb-3 " >
                        <label for="exampleInputEmail1" className="form-label">Note Title</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3 ">
                        <label for="exampleInputPassword1" className="form-label h-50 d-inline-block">Note Description</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div >

            <Notes />
        </div >
    )
}

export default Home