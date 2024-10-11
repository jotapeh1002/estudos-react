import './Navbar.css'

export function Navbar() {

    function alertTest(){
        alert('esse um teste')
    }

    return (
        <div className="mx-5 pt-8 flex justify-between">
                <button onClick={alertTest} className="material-symbols-outlined text-2xl border border-neutral-500
                rounded-md p-1 px-2 shadow-sm text-neutral-500 bg-zinc-200 bg-opacity-50">settings</button>
                <div className="text-4xl">
                    <span className="text-gray-600">LE</span>
                    <span className="text-green-600">TR</span>
                    <span className="text-yellow-600">IX</span>
                    <span className="text-gray-600">.IO</span>
                </div>
                <button onClick={alertTest} className="material-symbols-outlined text-2xl border border-neutral-500
                rounded-md p-1 px-2 shadow-sm text-neutral-500 bg-zinc-200 bg-opacity-50">question_mark</button>
            </div>
    )
}
