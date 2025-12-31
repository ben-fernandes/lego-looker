import Parts from './components/parts/Parts.tsx'
import Sets from './components/sets/Sets.tsx'

function App() {
    return (
        <div className="flex min-h-screen">
            <aside className="flex-1 p-2 border-r border-r-gray-200 dark:border-r-gray-800">
                <Parts/>
            </aside>
            <main className="flex-2 p-2">
                <Sets/>
            </main>
        </div>
    )
}

export default App
