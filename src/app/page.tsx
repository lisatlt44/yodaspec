import { createProject } from '@/actions/project-actions'
import ProjectsList from '@/components/lists/projects-list'
import CreateProjectDialog from '@/components/ui/dialogs/create-project-dialog'
import { getProjects } from '@/db/services/project-service'
import { Suspense } from 'react'
import Loading from './loading'

export default async function Home (): Promise<React.ReactNode> {
  const projects = await getProjects()

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <CreateProjectDialog createProject={createProject} />
        <Suspense fallback={<Loading />}>
          <ProjectsList projects={projects} />
        </Suspense>
      </main>
    </div>
  )
}
