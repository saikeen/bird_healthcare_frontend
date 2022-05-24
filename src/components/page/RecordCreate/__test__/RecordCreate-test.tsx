import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RecordCreatePage from '../RecordCreate-page';

describe('Top', () => {
  it('愛鳥登録画面を表示する', () => {
    render(<RecordCreatePage />);
    expect(screen.getByText('愛鳥 登録')).toBeInTheDocument();
  });
});