import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BirdListPage from '../BirdList.page';

describe('Top', () => {
  it('愛鳥一覧画面を表示する', () => {
    render(<BirdListPage />);
    expect(screen.getByText('愛鳥 一覧')).toBeInTheDocument();
  });
});