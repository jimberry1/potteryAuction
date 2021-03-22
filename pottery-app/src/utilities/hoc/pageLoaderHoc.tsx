import PageLoader from '../../UI/pageLoader';

export interface PageLoaderHocProps {
  loading: boolean;
  children: any;
}

const PageLoaderHoc: React.SFC<PageLoaderHocProps> = ({
  loading,
  children,
}) => {
  return <>{loading ? <PageLoader /> : <>{children}</>}</>;
};

export default PageLoaderHoc;
