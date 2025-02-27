import { PublicKey } from '@solana/web3.js';

import { GovernanceConfig, InstructionData } from './accounts';

export enum GovernanceInstruction {
  CreateRealm = 0,
  DepositGoverningTokens = 1,
  WithdrawGoverningTokens = 2,
  SetGovernanceDelegate = 3, // --
  CreateAccountGovernance = 4,
  CreateProgramGovernance = 5,

  CreateProposal = 6,
  AddSignatory = 7,
  RemoveSignatory = 8,

  InsertInstruction = 9,
  RemoveInstruction = 10,
  CancelProposal = 11,
  SignOffProposal = 12,
  CastVote = 13,
  FinalizeVote = 14,
  RelinquishVote = 15,
  ExecuteInstruction = 16,

  CreateMintGovernance = 17,
  CreateTokenGovernance = 18,
}

export class CreateRealmArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.CreateRealm;
  name: string;

  constructor(args: { name: string }) {
    this.name = args.name;
  }
}

export class DepositGoverningTokensArgs {
  instruction: GovernanceInstruction =
    GovernanceInstruction.DepositGoverningTokens;
}

export class WithdrawGoverningTokensArgs {
  instruction: GovernanceInstruction =
    GovernanceInstruction.WithdrawGoverningTokens;
}

export class CreateAccountGovernanceArgs {
  instruction: GovernanceInstruction =
    GovernanceInstruction.CreateAccountGovernance;
  config: GovernanceConfig;

  constructor(args: { config: GovernanceConfig }) {
    this.config = args.config;
  }
}

export class CreateProgramGovernanceArgs {
  instruction: GovernanceInstruction =
    GovernanceInstruction.CreateProgramGovernance;
  config: GovernanceConfig;
  transferUpgradeAuthority: boolean;

  constructor(args: {
    config: GovernanceConfig;
    transferUpgradeAuthority: boolean;
  }) {
    this.config = args.config;
    this.transferUpgradeAuthority = !!args.transferUpgradeAuthority;
  }
}

export class CreateMintGovernanceArgs {
  instruction: GovernanceInstruction =
    GovernanceInstruction.CreateMintGovernance;
  config: GovernanceConfig;
  transferMintAuthority: boolean;

  constructor(args: {
    config: GovernanceConfig;
    transferMintAuthority: boolean;
  }) {
    this.config = args.config;
    this.transferMintAuthority = !!args.transferMintAuthority;
  }
}

export class CreateTokenGovernanceArgs {
  instruction: GovernanceInstruction =
    GovernanceInstruction.CreateTokenGovernance;
  config: GovernanceConfig;
  transferTokenOwner: boolean;

  constructor(args: { config: GovernanceConfig; transferTokenOwner: boolean }) {
    this.config = args.config;
    this.transferTokenOwner = !!args.transferTokenOwner;
  }
}

export class CreateProposalArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.CreateProposal;
  name: string;
  descriptionLink: string;
  governingTokenMint: PublicKey;

  constructor(args: {
    name: string;
    descriptionLink: string;
    governingTokenMint: PublicKey;
  }) {
    this.name = args.name;
    this.descriptionLink = args.descriptionLink;
    this.governingTokenMint = args.governingTokenMint;
  }
}

export class AddSignatoryArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.AddSignatory;
  signatory: PublicKey;

  constructor(args: { signatory: PublicKey }) {
    this.signatory = args.signatory;
  }
}

export class SignOffProposalArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.SignOffProposal;
}

export class CancelProposalArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.CancelProposal;
}

export enum Vote {
  Yes,
  No,
}

export class CastVoteArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.CastVote;
  vote: Vote;

  constructor(args: { vote: Vote }) {
    this.vote = args.vote;
  }
}

export class RelinquishVoteArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.RelinquishVote;
}

export class FinalizeVoteArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.FinalizeVote;
}

export class InsertInstructionArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.InsertInstruction;
  index: number;
  holdUpTime: number;
  instructionData: InstructionData;

  constructor(args: {
    index: number;
    holdUpTime: number;
    instructionData: InstructionData;
  }) {
    this.index = args.index;
    this.holdUpTime = args.holdUpTime;
    this.instructionData = args.instructionData;
  }
}

export class RemoveInstructionArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.RemoveInstruction;
}

export class ExecuteInstructionArgs {
  instruction: GovernanceInstruction = GovernanceInstruction.ExecuteInstruction;
}
