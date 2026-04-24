import TaskCheckbox from "@/components/TaskCheckbox";
import { addTask, getTasks, deleteTask } from "@/lib/actions";

export default async function TasksPage() {
  const tasks = await getTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Task <span className="text-primary">Dashboard</span>
          </h1>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
            Manage your daily workflow and stay productive.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side: Create Task Form */}
          <div className="lg:col-span-4">
            <div className="card bg-base-100 shadow-2xl border border-slate-200 dark:border-slate-700 sticky top-8">
              <div className="card-body">
                <h2 className="card-title text-xl mb-4">Create New Task</h2>
                <form action={addTask} className="space-y-4">
                  <div className="form-control">
                    <label className="label font-semibold">Title</label>
                    <input 
                      name="title" 
                      type="text" 
                      placeholder="What needs to be done?" 
                      className="input input-bordered focus:input-primary w-full transition-all" 
                      required 
                    />
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Description</label>
                    <textarea 
                      name="description" 
                      className="textarea textarea-bordered focus:textarea-primary h-24" 
                      placeholder="Add some details..."
                    ></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label font-semibold">Priority</label>
                    <select name="priority" className="select select-bordered focus:select-primary w-full">
                      <option value="LOW">Low</option>
                      <option value="MEDIUM">Medium</option>
                      <option value="HIGH">High</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary w-full shadow-lg hover:shadow-primary/30 mt-2">
                    Add Task
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side: Task List */}
          <div className="lg:col-span-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                Active Tasks
              </h2>
              <span className="badge badge-primary badge-lg gap-2 p-4 font-bold shadow-md">
                {tasks.length} {tasks.length === 1 ? 'Task' : 'Tasks'}
              </span>
            </div>
            
            <div className="grid gap-4">
              {tasks.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 bg-white/50 dark:bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-300">
                  <p className="text-slate-500 text-lg">No tasks found. Start by adding one!</p>
                </div>
              ) : (
                tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className="group card card-side bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 overflow-hidden"
                  >
                    {/* Priority Indicator Stripe */}
                    <div className={`w-2 ${
                      task.priority === 'HIGH' ? 'bg-error' : 
                      task.priority === 'MEDIUM' ? 'bg-warning' : 'bg-success'
                    }`} />
                    {/* এখানে নতুন কম্পোনেন্টটি বসান */}
    <div className="flex items-center pl-4">
      <TaskCheckbox id={task.id} isCompleted={task.isCompleted} />
    </div>
                    <div className="card-body p-6 flex-row justify-between items-center">
                      <div className="max-w-[80%]">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-bold text-xl text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                            {task.title}
                          </h3>
                          <div className={`badge badge-outline badge-xs opacity-70`}>
                            {task.priority}
                          </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                          {task.description}
                        </p>
                      </div>

                      <div className="card-actions flex flex-col gap-2">
                        <form action={async () => {
                          "use server";
                          await deleteTask(task.id);
                        }}>
                          <button className="btn btn-ghost btn-circle text-error hover:bg-error/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}