import styled from "@emotion/styled";

const BlobPhoto = styled.div`
  background-image: url(/photo.jpg);
  width: 300px;
  height: 300px;
  border: 3px solid black;
  background-size: cover;
  background-position: center center;
  animation: blob 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
`;

const Photo = () => {
  return (
    <>
      <style>
        {`
            @keyframes blob {
                0%, 100% {
                    border-radius: 60% 40% 40% 60% / 60% 40% 60% 40%;
                }
                50% {
                    border-radius: 40% 60% 60% 40% / 40% 60% 40% 60%;
                }
            }
            `}
      </style>
      <BlobPhoto />
    </>
  );
};

export default Photo;
