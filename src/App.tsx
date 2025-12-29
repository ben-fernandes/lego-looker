import Parts from './components/Parts.tsx'
import Sets from './components/Sets.tsx'

function App() {
    return (
        <div className="flex">
            <aside className="flex-1 bg-gray-100">
                <Parts/>
            </aside>
            <main className="flex-2">
                <Sets/>
            </main>
        </div>
    )
}

export default App
