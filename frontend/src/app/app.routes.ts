
import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Transactions } from './pages/transactions/transactions';
import { Analytics } from './pages/analytics/analytics';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: Dashboard },
	{ path: 'transactions', component: Transactions },
	{ path: 'analytics', component: Analytics },
	{ path: 'profile', component: Profile },
	{ path: '**', redirectTo: 'dashboard' }
];
