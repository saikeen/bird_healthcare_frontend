import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import RecordList from '../RecordList';

describe('RecordList', () => {
  it('記録一覧画面を表示する', () => {
    render(<RecordList />);
    expect(screen.getByText('記録 一覧')).toBeInTheDocument();
    // TODO: APIから非同期で取得したデータが表示されていることを確認するテストを追加する
  });
});
