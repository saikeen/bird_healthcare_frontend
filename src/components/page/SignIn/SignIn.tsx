import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react';
import { gql, useMutation } from '@apollo/client';
import Panel from '../../ui/Panel';

const USER_LOGIN = gql`
  mutation UserLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      credentials {
        uid
        accessToken
      }
    }
  }
`;

const SignIn: React.FC = () => {
  const [userLoginMutation, { data, loading, error }] = useMutation(USER_LOGIN);

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>{`Submission error! ${error.message}`}</p>;

  return (
    <Box bg="gray.100" p={4}>
      <Heading size="md">ログイン</Heading>
      <Panel mt={4}>
        <form>
          <FormControl>
            <FormLabel htmlFor="email">メールアドレス</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">パスワード</FormLabel>
            <Input id="password" type="password" />
          </FormControl>
          <Button
            type="submit"
            onClick={() =>
              userLoginMutation({
                variables: { email: '', password: '' },
              })
            }
          >
            ログイン
          </Button>
        </form>
      </Panel>
    </Box>
  );
};

export default SignIn;
