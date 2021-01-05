import { useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { Repos } from "../components/Repos";
import { GitHubContext } from "../context/github/githubContext"

export const Profile = ({match}) => {
   const {getUser, getRepos, loading, user, repos} = useContext(GitHubContext);
   const urlName = match.params.name;

   useEffect(() => {
      getUser(urlName);
      getRepos(urlName);
      // eslint-disable-next-line
   }, [])

   if (loading) {
      return <p className="text-center">Loading...</p>
   }

   const {
      name, 
      company, 
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      public_repos,
      public_gists,
      following
   } = user;

   return (
      <>
         <Link to="/" className="btn btn-primary mb-3">Go back</Link>

         <div className="card mb-4">
            <div className="card-body">
               <div className="row">
                  <div className="col-sm-3 text-center">
                     <img 
                        src={avatar_url} 
                        alt={name}
                        style={{width: 150}}
                     />
                     <h3>{name}</h3>
                     { location && <p>Location: {location}</p> }
                  </div>
                  <div className="col">
                     {
                        bio && 
                        <>
                           <h3>Bio</h3>
                           <p>{bio}</p>
                        </>
                     }
                     <a 
                        href={html_url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-dark"
                     >
                        Profile
                     </a>

                     <ul className="mt-3">
                        {
                           login && 
                           <li>
                              <strong>Username: {login}</strong>
                           </li>
                        }
                        {
                           company && 
                           <li>
                              <strong>Company: {company}</strong>
                           </li>
                        }
                        {
                           blog && 
                           <li>
                              <strong>Website: <a href={blog} target="_blank" rel="noreferrer">{blog}</a></strong>
                           </li>
                        }
                     </ul>

                     <div className="badge badge-primary p-2 m-1">Followers: {followers}</div>
                     <div className="badge badge-success p-2 m-1">Following: {following}</div>
                     <div className="badge badge-info p-2 m-1">Repositories: {public_repos}</div>
                     <div className="badge badge-dark p-2 m-1">Gists: {public_gists}</div>
                  </div>
               </div>
            </div>
         </div>

         <Repos repos={repos} />
      </>
   )
}