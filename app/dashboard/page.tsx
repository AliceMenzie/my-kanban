import supabase from "@/app/(utils)/supabaseClient"
import Link from "next/link"
import Image from "next/image"
import { parseISO, format } from "date-fns"
import { Snippet } from "@/app/(components)/Snippet"
import SortIcon from "../../public/assets/sort.svg"

// TODO: move to utils
function formatDate(dateString: any) {
  const date = parseISO(dateString)
  // const formattedDate = format(date, "EEE do MMMM yyyy")
  const formattedDate = format(date, "dd/MM/yy")
  return formattedDate
}

const getData = async () => {
  const { data, error } = await supabase
    .from("boards")
    // TODO find out why .select("*") doesn't work
    .select(
      // TODO: look into team_members, if i remove team_members then team is null? why
      "created_at, board_name, team_id, id, created_by, users( username ), teams(team_name), team_members( user_id, active_board)"
      // "created_at, board_name, team_id, id, created_by, users( username ), teams(team_name)"
    )

  return { data, error }
}

const Page = async () => {
  const { data, error } = await getData()
  if (error) {
    ;<div> there was an error </div>
  }
  return (
    <>
      <header className="flex gap-4 items-center border-3 p-4 px-8">
        <h2 className="font-semibold text-4xl">Boards</h2>
        <div className="text-gray-200 font-normal text-4xl">Asc</div>
        <div className="flex-col inline-flex">
          <Image alt="sort" src={SortIcon} width={30} height={30} />
        </div>
      </header>
      {/* TODO: change section to main?  */}
      <section className="p-8 pb-[85%] flex-col bg-gray-100 h-full overflow-scroll rounded-2xl">
        {data?.map(
          (
            board: any
            // TODO: add types
            //   {
            //   created_at: any
            //   board_name: any
            //   team_id: any
            //   id: number
            //   created_by: any
            //   users: { id: any; username: any }
            // }
          ) => {
            return (
              <div
                className="bg-white rounded-md p-4 my-8 h-96 flex-col drop-shadow"
                key={board.id}
              >
                <div>
                  <Link href={`/boards/${board.id}`}>
                    <h5 className="text-2xl font-semibold pb-2">
                      {board?.board_name}
                    </h5>
                  </Link>
                </div>
                <div className="flex flex-row">
                  <div className="basis-1/2">
                    <Snippet
                      border="indigo"
                      title="Created"
                      subtext={formatDate(board?.created_at)}
                    />
                    <Snippet
                      border="green"
                      title="Team"
                      subtext={board.teams.team_name}
                    />
                    <Snippet
                      border="pink"
                      title="Author"
                      subtext={board.users.username}
                    />
                    <Snippet
                      border="orange"
                      title="Last Updated"
                      subtext="not sure yet"
                    />
                  </div>

                  <div className="border-2 basis-1/2 text-gray-200">
                    placeholder for stats
                  </div>
                </div>
              </div>
            )
          }
        )}
      </section>
    </>
  )
}
export default Page
