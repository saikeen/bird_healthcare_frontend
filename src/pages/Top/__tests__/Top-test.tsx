import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TopPage from '../Top.page';

describe('Top', () => {
  it('トップ画面を表示する', () => {
    render(<TopPage />);
    expect(screen.getByText('ホーム')).toBeInTheDocument();
  });
});
