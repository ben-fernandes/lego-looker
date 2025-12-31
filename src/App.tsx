import Parts from './components/parts/Parts.tsx'
import Sets from './components/sets/Sets.tsx'

function App() {
    return (
        <div className="flex min-h-screen">
            <aside className="flex-1 shadow p-2">
                <Parts/>
            </aside>
            <main className="flex-2 p-2">
                <Sets/>
            </main>
        </div>
    )
}

export default App
