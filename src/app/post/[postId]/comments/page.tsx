const Page = ({ params }: { params: { postId: string } }) => {
  return (
    <div>
      <h2>post postId {params.postId} comments</h2>
    </div>
  )
}
export default Page
