import { AskResponse, AzureSqlServerCodeExecResult } from '../../api';

export type ParsedAnswer = {
  answer: string;
  plotly_data: AzureSqlServerCodeExecResult | null;
};

export function parseAnswer(answer: AskResponse): ParsedAnswer {
  return {
    answer: answer.answer,
    plotly_data: answer.plotly_data
  };
}