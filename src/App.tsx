import Parts from './components/parts/Parts.tsx'
import Sets from './components/Sets.tsx'

function App() {
    return (
        <div className="flex h-full">
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
