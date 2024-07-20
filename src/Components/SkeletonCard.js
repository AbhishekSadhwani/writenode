import Skeleton from 'react-loading-skeleton';

export const SkeletonCard = () => {
  return (   
    <section className="post-card">
        <p className="heading"><Skeleton /></p>
        <p className="content"><Skeleton count={3} /></p>
        <p className="control">
            <Skeleton width="70px" />
        </p>
    </section>
  )
}
