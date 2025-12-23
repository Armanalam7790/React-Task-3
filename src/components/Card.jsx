import React from 'react'

const Card = ({ fullname, title, profile, coverimg, likesCount, postCount, viewCount,followed }) => {
  return (
    <div className="bg-white text-black w-[20%] rounded-lg overflow-hidden ">
      
      {/* Cover Image */}
      <img
        src={coverimg}
        alt="cover"
        className="h-32 w-full object-cover"
      />

      {/* Profile + Info */}
      <div className="p-4 flex gap-4">
        
        <img
          src={profile}
          alt="profile"
          className="w-16 h-16 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h2 className="text-lg font-bold">{fullname}</h2>
          <p className="text-sm">{title}</p>
        </div>
      </div>

   
      <div className="flex justify-around text-sm py-3 border-t">
        <div>

          <p className="font-bold">{likesCount}</p>
          <p>Likes</p>
        </div>

        <div>
          <p className="font-bold">{postCount}</p>
          <p>Posts</p>
        </div>

        <div>
          <p className="font-bold">{viewCount}</p>
          <p>Views</p>
        </div>

        <div>
            <p  className="font-bold">{followed? "true" : "false"}</p>
            <p>Friends</p>
        </div>
      </div>

    </div>
  )
}

export default Card
